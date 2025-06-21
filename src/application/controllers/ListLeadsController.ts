import { IController, IRequest, IResponse } from "../interfaces/IController";

export class ListLeadsController implements IController{
    async handler(request: IRequest): Promise<IResponse> {
        console.log(request)

        return {
            statusCode: 200,
            body: {
                leads: [
                    {id: '1', name: 'kauan'},
                    {id: '2', name: 'santin55'},
                    {id: '3', name: 'coitado'},
                ]
            }
        }
    }

}
