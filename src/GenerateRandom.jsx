import { useState } from "react";

let GeneratePassword = () => {
    // 1. Move the logic function outside or keep it clean inside
    function generatePass(length = 16, includeUpper = true, includeNumber = true, includeSpecial = true) {
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

        let allowedChars = lowercase;
        let password = "";

        if (includeUpper) allowedChars += uppercase;
        if (includeNumber) allowedChars += numbers;
        if (includeSpecial) allowedChars += special;

        if (allowedChars.length === 0) return "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
        return password;
    }

    // 2. States for the password and the copy button feedback
    const [password, setPassword] = useState("");
    

    // 3. Handle generating a new password
    const handleGenerate = () => {
        const newPassword = generatePass();
        setPassword(newPassword);
         // Reset copy button status when a new pass is made
    };



    return (
        <div style={{ display: "flex", gap: "10px", alignItems: "center", margin: "20px" }}>
            {/* Standard controlled input field */}
            <input 
                type="text" 
                value={password} 
                readOnly 
                placeholder="Click generate..." 
                style={{ padding: "8px", fontSize: "16px" }}
            />
            
            {/* Generate Button */}
            <button onClick={handleGenerate} style={{ padding: "8px 12px" }}>
                Generate
            </button>

            
        </div>
    );
};

export default GeneratePassword;