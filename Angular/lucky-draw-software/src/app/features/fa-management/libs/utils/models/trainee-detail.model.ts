export enum TraineeStatus {
  waitingForClass = 0,
  active = 1,
}

export interface TraineeDetail {
  emplId: string,
  type: string,
  status: TraineeStatus,
  allocationStatus: string,
  account: string,
  name: string,
  gender: string,
  dob: string,
  university: string,
  faculty: string,
  phone: string,
  email: string,
  salaryPaid: string,
  tpBankAccount: number,
  allowanceGroup: string,
  commitment: string,
  history: string
}