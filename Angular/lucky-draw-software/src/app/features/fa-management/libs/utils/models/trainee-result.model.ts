export interface TopicItem {
  topicName: string,
  maxScore: number,
  passingScore: number,
  weightedNumber: number
}

export interface MilestoneItem {
  milestoneName: string,
  salaryPaid: 1,
  startDate: string,
  endDate: string,
  topic: TopicItem[]
}

export interface MilestoneConfig {
  totalMaxScore: number,
  totalPassingScore: number,
  totalWeightNumber: number,
  milestone: MilestoneItem[]
}

export interface AttendanceStatus {
  name: string;
  statusOfEachDay: string[];
}

export interface TraineeResult {
  className: string,
  milestoneConfig: MilestoneConfig;
  attendanceStatus: {
    result: AttendanceStatus[];
  }
}