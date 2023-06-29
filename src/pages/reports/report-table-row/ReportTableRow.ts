interface ReportTableRow {
  date: string;
  paymentId: string;
  amount: number | string;
  gatewayId?: string;
}

export default ReportTableRow;
