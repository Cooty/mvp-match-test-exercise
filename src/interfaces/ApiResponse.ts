type HTTPCodes = "200" | "404" | "400" | "500";

interface ApiResponse<T = Record<string, unknown>> {
  code: HTTPCodes;
  data: T[];
  error?: string;
}

export default ApiResponse;
