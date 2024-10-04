import {
  DocumentHeadTags,
  documentGetInitialProps,
  } from '@mui/material-nextjs/v14-pagesRouter';
import { Head, Html, Main, NextScript } from 'next/document';
 
   export default function MyDocument(props) {
     return (
       <Html lang="en">
         <Head>
         <DocumentHeadTags {...props} />
         <link
            href="https://fonts.googleapis.com/css2?family=Anuphan:wght@100;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
         <div></div>
         </Head>
         <body>
           <Main />
           <NextScript />
         </body>
       </Html>
     );
   }
  
  MyDocument.getInitialProps = async (ctx) => {
    const finalProps = await documentGetInitialProps(ctx);
   return finalProps;
  };
  