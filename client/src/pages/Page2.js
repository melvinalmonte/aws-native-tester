import { Button } from '@chakra-ui/button'
import { Heading, Link } from '@chakra-ui/layout'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Layout from '../component/layout/Layout'

const Page2 = () => {
    return (
        <Layout>
            <Heading>This is page 2</Heading>
            <Link as={NavLink} to={"/"}>
                <Button>Go to page 1</Button>
            </Link>
        </Layout>
    )
}

export default Page2
