import { Card, CardBody, CardText } from "reactstrap"
import { Briefcase, FileText, Monitor } from "react-feather"

const SideBar = ({ onToggle, active }) => {
    return (
        <>
            <Card className='mb-2'>
                <CardBody>
                    <CardText className="d-flex items-center justify-content-center gap-1">
                        <Briefcase /><strong>Yuridik shaxs</strong>
                    </CardText>
                </CardBody>
            </Card>

            <Card onClick={() => onToggle('1')} color={active === '1' && 'success'} className={`mb-2 cursor-pointer ${active === '1' && 'text-white'}`}>
                <CardBody>
                    <CardText className="d-flex flex-column align-items-center justify-content-center gap-1">
                        <Briefcase />
                        <strong>Yuridik shaxs</strong>
                        <span className="text-center">Tadbirkorning hozirgi faoliyati bilan bog‘liq ma’lumotlar</span>
                    </CardText>
                </CardBody>
            </Card>

            <Card onClick={() => onToggle('2')} color={active === '2' && 'success'} className={`mb-2 cursor-pointer ${active === '2' && 'text-white'}`}>
                <CardBody>
                    <CardText className="d-flex flex-column align-items-center justify-content-center gap-1">
                        <FileText />
                        <strong>Guvohnoma</strong>
                        <span className="text-center">Tadbirkorning hozirgi faoliyati bilan bog‘liq ma’lumotlar</span>
                    </CardText>
                </CardBody>
            </Card>

            <Card onClick={() => onToggle('3')} color={active === '3' && 'success'} className={`mb-2 cursor-pointer ${active === '3' && 'text-white'}`}>
                <CardBody>
                    <CardText className="d-flex flex-column align-items-center justify-content-center gap-1">
                        <Monitor />
                        <strong>O‘zgartirishlar tarixi</strong>
                        <span className="text-center">Tadbirkorning hozirgi faoliyati bilan bog‘liq ma’lumotlar</span>
                    </CardText>
                </CardBody>
            </Card>
        </>
    )
}

export default SideBar