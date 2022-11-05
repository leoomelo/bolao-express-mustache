import { Schema, Model, model, connection } from 'mongoose'

type BetType = {
  team1: string,
  oficialTeamScore1: number,
  team2: string,
  oficialTeamScore2: number,
  userEmail: string
}

const schema = new Schema<BetType>({
  team1: { type: String, required: true },
  oficialTeamScore1: { type: Number, required: true },
  team2: { type: String, required: true },
  oficialTeamScore2: { type: Number, required: true },
  userEmail: { type: String, required: true }
})

const modelName: string = 'Bet'

const betModel = (connection && connection.models[modelName]) ?
  (connection.models[modelName] as Model<BetType>) : model<BetType>(modelName, schema)

export default betModel