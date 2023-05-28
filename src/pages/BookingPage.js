import { useParams } from "react-router-dom"

const BookingPageView = () => {
    const {id} =useParams()
  return (
    <div>
      single page : {id}
    </div>
  )
}

export default BookingPageView
