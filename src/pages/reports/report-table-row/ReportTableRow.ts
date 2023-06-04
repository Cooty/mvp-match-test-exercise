interface ReportTableRow {
  date: string;
  paymentId: string;
  amount: number | string;
  gatewayName?: string;
}

export default ReportTableRow;
