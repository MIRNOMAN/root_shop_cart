import Lottie from "lottie-react"
import errorPage from "../../errorfile.json"

const ErrorPage = () => {
  return (
    <div>
                <Lottie className="h-screen" animationData={errorPage}></Lottie>

    </div>
  )
}

export default ErrorPage