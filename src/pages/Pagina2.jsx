import { useEffect } from 'react'

export default function Pagina2() {
  useEffect(() => {
    document.title = 'Você é Capaz!'
  }, [])
    return (
      <div style={{ maxWidth: '800px', textAlign: 'center', lineHeight: '1.6' }}>
        <h1>Você é Capaz!</h1>
        <p>
          Acredite em si mesmo, mesmo quando o mundo duvidar. Você tem dentro de si o poder de superar
          desafios e conquistar objetivos inimagináveis. <br /><br />
          Tudo começa com um passo. E esse passo começa agora.
        </p>
      </div>
    )
  }
  