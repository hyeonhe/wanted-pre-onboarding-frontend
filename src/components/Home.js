import { Link } from "react-router-dom"

const Home = () => {
    return(
        <>
                <Link to='/signup'><button>회원가입</button></Link>
            <Link to='/signin'><button>로그인</button></Link>
        </>
    )
}

export default Home;