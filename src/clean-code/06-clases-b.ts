(() => {

    type Gender = 'M'|'F'; 

    // class Person {
    //     public name: string;
    //     public gender: Gender;
    //     public birthdate: Date;

    //     constructor(name: string, gender: Gender, birthdate: Date) {
    //         this.name = name;
    //         this.gender = gender;
    //         this.birthdate = birthdate;
    //     }
    // }

    interface PersonProps{
        name      : string;
        gender    : Gender;
        birthdate : Date;
    }

    class Person{
        public birthdate : Date;
        public gender    : Gender;
        public name      : string;

        constructor( { name, gender, birthdate }: PersonProps ) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;

        }
    }

    interface UserProps{
        email  : string;
        role   : string;
        person : PersonProps;
    }

    class User extends Person{
        public email  : string;
        public role   : string;
        public person : PersonProps = {} as PersonProps;     
        
        private lastAccess: Date;

        constructor({email,role,person}:UserProps) {
            
            super(person);
            this.email = email;
            this.role = role;

            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    interface UserSettingsProps{
        workingDirectory : string,
        lastOpenFolder   : string,
        user : UserProps;
    }

    class UserSettings extends User{

        public workingDirectory : string;
        public lastOpenFolder   : string;
        public user : UserProps = {} as UserProps;

        constructor({workingDirectory,lastOpenFolder,user}:UserSettingsProps) {
                super(user);
                this.workingDirectory= workingDirectory;
                this.lastOpenFolder= lastOpenFolder;
             }
    }

    const person = {
        name : 'Ramiro',
        gender: 'M' as Gender,
        birthdate:  new Date('1982-05-20')
    }

    const user: UserProps = {
        email:'rtc@gmail.com',
        role:'admin',
        person
    }

    const usSettings:UserSettingsProps = {
        lastOpenFolder:'/usr/home',
        workingDirectory: '/usr',
        user
    }

    const userSettings = new UserSettings(usSettings);
    console.log({userSettings});

})();