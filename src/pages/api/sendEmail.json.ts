// Outputs: /builtwith.json
import type { APIRoute } from "astro"
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const GET : APIRoute =  async({params, request}) =>{
    const send = await resend.emails.send({
        from: "jfulguera@inovapage.com",
        to:"jhonatanfulgueralucana@gmail.com",
        subject:"Sample Subject",
        html: "<p>Hola </p>",
        text:"Como estas ?"
    })
    if( send.data ) {
        return new Response(JSON.stringify({message: send.data}),{
            status: 200,
            statusText: "OK", 
        }
    )
    } else {
        return new Response(JSON.stringify({message: send.error}), {
            status: 500, 
        })
    }
    return new Response(
        JSON.stringify({
          name: 'Astro',
          url: 'https://astro.build/'
        })
    )
  }