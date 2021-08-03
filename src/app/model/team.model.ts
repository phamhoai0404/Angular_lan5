export class Team{
   constructor( 
    public id?:number,
    teamName?: string,
    teamId?: string,
    teamGroup?: Team,
    teamDescribe?:string,
    teamDateCreated?: string,
    teamMaker?: string,
    teamUpdateDay?: string,
    teamUpdater?:string
    ){}
    
}