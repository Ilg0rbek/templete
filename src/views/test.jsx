import { PDFViewer } from '@react-pdf/renderer'
import CancelMessage from "../generator/CancelMessage"

const styleSheet = {
    height: '100vh',
    width: "100%"
}

const Test = () => {
    return (
        <PDFViewer style={styleSheet}>
            <CancelMessage />
        </PDFViewer>
    )
}

export default Test