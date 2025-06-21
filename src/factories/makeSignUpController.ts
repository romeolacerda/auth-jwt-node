import { SignUpController } from "../application/controllers/SignUpController"
import { makeSignUpUseCase } from "./makeSignUpUseCase"

export function makeSignUpController() {
 return new SignUpController(makeSignUpUseCase())
}
