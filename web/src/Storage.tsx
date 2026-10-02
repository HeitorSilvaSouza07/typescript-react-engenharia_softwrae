 interface IForms {
    id: number;
    login: string;
    senha: string;
    nome: string;
    email: string
};

export default class Store {

    constructor() {
        this.dados();
    }

    dados(): void{

        let meusdados:IForms[] = [
            
            { id:1, login:"rimgo", senha: "1234", nome: "Ringo", email: "ringo@gmail.com" },
            { id:2, login:"john", senha: "123456", nome: "John", email: "john@gmail.com" },
            { id:3, login:"paul", senha: "123456", nome: "Paul", email: "paul@gmail.com" },
        ];
            localStorage.setItem("banco", JSON.stringify(meusdados));

    }

    cadastro(mf: IForms):void {
        let meusdados = (localStorage.getItem("banco"));

        let ds = JSON.parse(meusdados!) as IForms[];

        mf.login = (document.querySelector("#login") as HTMLInputElement).value;
        mf.senha = (document.querySelector("#senha") as HTMLInputElement).value;
        mf.nome = (document.querySelector("#nome") as HTMLInputElement).value;
        mf.email = (document.querySelector("#email") as HTMLInputElement).value;

        let cad = { id:1, login:mf.login, senha:mf.senha, nome:mf.nome, email:mf.email };

        //let mdIform[] = { id:1, login:"rimgo", senha: "123456", nome: "Ringo", email: "ringo@gmail.com" };

        ds.push(cad);

        localStorage.setItem("banco", JSON.stringify(ds));
    }



}