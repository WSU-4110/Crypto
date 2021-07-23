import React from 'react';
//import { AuthProvider } from '../src/contexts/AuthContext';
import firebase from "firebase/app"
import "firebase/auth"
import { useAuth } from "../contexts/AuthContext"
import { promises } from 'fs';
import { auth } from '../src/firebase';


//mock
jest.mock('firebase/app', () => {

    return {
        auth: jest.fn().mockReturnThis,
        createUserWithEmailAndPassword: jest.fn(),
        signInWithEmailAndPassword: jest.fn(),
        sendPasswordResetEmail: jest.fn(),
        signOut: jest.fn(),
        sendPasswordResetEmail: jest.fn(),
        updateEmail: jest.fn(),
        updatePassword: jest.fn(),
        initializeApp: jest.fn()


    }

});


// testing suite
describe("Testing all AuthContext Functions", () => {

    // make sure mocks are reset (clean up)
    afterAll(() => {
        jest.resetAllMocks();
    });

    // first
    it('testing register', async() => {
        
       const email = 'viona';
       const password = 'pas';
       const user = await auth.register(email, password);
       expect(user).toEqual(null);
       expect(auth.createUserWithEmailAndPassword).toBeCalledWith(email, password);

    });

    // second
    it('testing login', async() => {
        
        const email = 'viona';
        const password = 'pas';
        const user= await auth.login(email, password);
        expect(user).toEqual(null);
        expect(auth.signInWithEmailAndPassword).toBeCalledWith(email, password);

    });

    // third
    it('testing logout', async() => {

        const user = await auth.logout();
        expect(user).toEqual(null);
        expect(auth.signOut);

    });

    // fourth
    it('testing password reset', async() => {
       
        const email = 'vi';
        const user = await auth.passwordReset(email);
        expect(user).toEqual(null);
        expect(auth.sendPasswordResetEmail).toBeCalledWith(email);

    });

    //fifth
    it('testing change email', () => {

        const { currentUser } = useAuth();
        const email = 'vio';
        const user = promises.push.changeEmail(email);
        expect(user).ToEqual(null);
        expect(currentUser.updateEmail).toBeCalledWith(email);

       

    });

    // sixth
    it('testing change password', () => {

        const { currentUser} = useAuth();
        const password = 'pass';
        const user =promises.push.changePassword(password);
        expect(user).ToEqual(null);
        expect(currentUser.updatePassword).toBeCalledWith(password);

    });
})







