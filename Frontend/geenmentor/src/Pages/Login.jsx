
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react';
import axios from "axios";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = () => {
        axios.post("http://localhost:8080/users/login",{
            email,
            password
        })
        .then((data)=>{
            console.log(data)
            alert("Login Successfull")
        })
    }

    console.log(email, password)
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
                    </Text>
                </Stack>
                <Box onClick={handleSubmit}
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Text color={'blue.400'}>Forgot password?</Text>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}