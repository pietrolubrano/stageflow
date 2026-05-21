import { signInWithGoogle } from "@/lib/auth-actions";
import { Button } from "./ui/button";

const SignInWithGoogleButton = () => {
    return (
        <Button
        variant="outline"
        type="button"
        onClick={() => {
            signInWithGoogle();
        }}
        >
            Login with Google
        </Button>
    )
}

export default SignInWithGoogleButton;