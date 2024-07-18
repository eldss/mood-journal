import { PromptTemplate } from "@langchain/core/prompts"
import { RunnableSequence } from "@langchain/core/runnables"
import { OpenAI } from "@langchain/openai"
import { StructuredOutputParser } from "langchain/output_parsers"
import { z } from "zod"

/**
 * A parser that converts the output of the AI model into a structured format.
 */
const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    mood: z
      .string()
      .describe("The mood of the person who wrote the journal entry."),
    summary: z.string().describe("A quick summary of the journal entry."),
    subject: z.string().describe("The subject of the journal entry."),
    negative: z
      .boolean()
      .describe(
        "Whether the journal entry has a negative mood or not (i.e. does it contain negative emotions?)."
      ),
    color: z
      .string()
      .describe(
        "A hexadecimal color code that represents the mood of the journal entry (i.e. #FFDD4C for yellow representing happiness)."
      ),
  })
)

const chain = RunnableSequence.from([
  PromptTemplate.fromTemplate(
    `Analyze the following journal entry. Follow the instructions and format your 
    response to match the format instructions, no matter what!\n{formattedInstructions}\n{entry}`
  ),
  new OpenAI({
    model: "gpt-3.5-turbo",
    temperature: 0,
    apiKey: process.env.OPENAI_API_KEY,
  }),
  parser,
])

/**
 * Analyzes the given journal entry and returns a structured output.
 * @param content The journal entry to analyze.
 */
export async function analyze(content: string) {
  console.log("Analyzing journal entry ...")

  return await chain.invoke({
    entry: content,
    formattedInstructions: parser.getFormatInstructions(),
  })
}
