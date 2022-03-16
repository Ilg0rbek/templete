import { Link } from "react-router-dom"
import { Button } from "reactstrap"

export default ({ label, button }) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center gap-1 p-4">
            <img src={require("@src/assets/images/svg/nodata.svg").default} width={250} alt="nodata" />
            <h3>{label}</h3>
            {
                button && (
                    <Link to={button?.link}>
                        <Button color="primary" outline>{button?.name}</Button>
                    </Link>
                )
            }
        </div>
    )
}