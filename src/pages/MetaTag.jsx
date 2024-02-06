import { Helmet } from 'react-helmet';
import {baseWEB} from '../API/API';
import Logo from "../assets/Logo.webp"
const MetaTag = ({title , desc , canonical , schema }) => {
  return (
    <Helmet>  
      <title>{title}</title>   
      <link rel="canonical" href={`${baseWEB+canonical || ""}`} />
      <link rel="icon" href={Logo} />
      <meta name="description" content={desc} /> 

      <meta property="og:url" content={`${baseWEB+canonical || ""}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default MetaTag
