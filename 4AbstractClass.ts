
abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter :string
    ){ }
abstract getsepia():void

getReeltime():number{
// calculation
// lets say we return some random no. 
return 7;
}
}


class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter :string,
        public burst:number
    ){
        super(cameraMode,filter)

    }
    getsepia(): void {
        console.log("Sepia")
    }
}
 const skc=new Instagram("POrtrait","test",3)
 skc.getReeltime()
export{}
//  summary:
// abstract class cannot make their objects by their own but they help to define class who are inheriting them (as class Instagram inherits abstract class TakePhoto) 
// and get a better structure of a class
// if you want to put methods that are compulsarily needed then u need to define them as abstract like abstract getsepia():void in line 7
// and you can add function in abstract class unlike in interface as in 
// getReeltime():number