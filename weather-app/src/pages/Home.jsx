import {Box , styled} from '@mui/material';
import {Image} from 'react';
import Sunset from '../assets/image/bg.jpg';


const Component = styled(Box)({
    height: '100vh'
})

const image = styled(Box) ({
    backgroundImage: `url(${Sunset})`,
    width: '27%',
    height: '80%',
    backgroundSize: 'cover',

})

const Home = () => {
    return (
       <Component>
            <Image></Image>
            <Box></Box>
        </Component>
       
    )
}

export default Home;