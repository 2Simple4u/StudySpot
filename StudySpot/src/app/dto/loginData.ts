class loginData{


    userName?: String;
    password?: String;


    public setUserName(userName : string) {
        this.userName = userName;
    }

     public getUserName() : any {
        return this.userName as string;
    }

    public setPassword(password : string) {
        this.password = password;
    }

    public getPassword() : any {
         this.password as string;
    }






}