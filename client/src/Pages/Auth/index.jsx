import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CommonForm from '@/components/commonForm';
import { signInFormControls, signUpFormControls } from '@/config';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AuthPage = () => {

    const [activeTab, setActiveTab] = useState("signin");

    function handleTabChange(value) {
        setActiveTab(value)
    }
    return (
        <div className='flex flex-col min-h-screen'>
            <header className='px-4 lg:px-6 h-14 flex items-center border-b'>
                <Link to="/" className='flex items-center justify-center'>
                    <GraduationCap className='h-8 w-8 mr-4' />
                    <span className='font-extrabold text-xl'>LMS Learn</span>
                </Link>
            </header>

            <div className="flex items-center justify-center min-h-screen bg-background">
                <Tabs value={activeTab} defaultValue="signin" onValueChange={handleTabChange} className="w-full max-w-md">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="signin">Sign In</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="signin">
                        <Card className="p-6 space-y-6">
                            <CardHeader>
                                <CardTitle>Sign in to your account</CardTitle>
                                <CardDescription>
                                    Enter your email and password to access your account
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <CommonForm buttonText={"Sign In"} formControls={signInFormControls} />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="signup">

                        <Card className="p-6 space-y-6">
                            <CardHeader>
                                <CardTitle>Createe a new account</CardTitle>
                                <CardDescription>
                                    Enter your details to get started
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <CommonForm formControls={signUpFormControls} buttonText={"Sign Up"} />
                            </CardContent>
                        </Card>
                        
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default AuthPage