import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.CHAT_GPT_API_KEY });

export async function identifyTrashType(image: string): Promise<string | null> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: taskPrompt },
      {
        role: "user",
        content: [
          {
            type: "image_url",
            image_url: {
              url: image,
            },
          },
        ],
      },
      { role: "system", content: formatPrompt },
    ],
    response_format: { type: "json_object" },
  });

  console.log(response.choices[0].message.content);

  return response.choices[0].message.content;
}

const taskPrompt = `
Identify all different parts of this trash.
State which waste category each part goes to in Denmark.
These can be: RESIDUAL, METAL, BEVERAGE_CARTONS, PLASTIC, PAPER, CARDBOARD, FOOD, GLASS. 
Give additional non-trivial tips.`;

const formatPrompt = `
Provide a JSON like: 
{categories:[{name: 'METAL',parts: ['cap']},{name: 'GLASS',parts: ['bottle']}],tips: 'do not forget to remove any food residue'}`;
