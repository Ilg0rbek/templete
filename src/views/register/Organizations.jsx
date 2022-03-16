import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation, useParams } from "react-router-dom"
import { Button, Col, Row } from "reactstrap"
import { getOpfIndividual, getOpfLegal } from "@store/reducers/System"
import { useTranslation } from "react-i18next"

const Organizations = () => {
    const dispatch = useDispatch()
    const { who } = useParams()
    const { t } = useTranslation()
    useEffect(() => {
        if (who === 'legal') {
            dispatch(getOpfLegal())
        } else {
            dispatch(getOpfIndividual())
        }
    }, [who])
    const location = useLocation()
    const history = useHistory()
    const { opf } = useSelector(state => state.sys)

    return (
        <>
            <h3>Tashkiliy huquqiy shaklni tanlang</h3>
            <Row xl={6} md={4} xs={2} className="mt-2 justify-content-between gap-1">
                {
                    Array.isArray(opf) && opf?.map((data, index) => (
                        <Col key={index} className="bg-primary cursor-pointer d-flex align-items-center justify-content-center text-white text-center rounded p-1" onClick={() => history.push(`${location.pathname}/offer?opf=${data.id}`)}>
                            {t(data.nameTag)}
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default Organizations
