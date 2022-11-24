import Document, {Html, Head, Main, NextScript} from 'next/document'
 class MyDocument extends Document {
    render (){
    return (
        <Html lang='en'>
            <Head/>
            <body>
                <div id="overlays"></div> 
                {/* 이런식으로 추가해두면 모달창 같은거 만들어서 열때 편함 */}
                <Main/>
                <NextScript/>
            </body>
        </Html>
    );
}}
export default MyDocument;