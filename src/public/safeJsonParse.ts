/**
 * @description A thin wrapper around JSON.parse that returns null instead of throwing an error
 */
export const safeJsonParse = <T_DataType = unknown, T_Default = null>(
  string: string,
  defaultValue?: T_Default | null,
): T_DataType | T_Default => {
  try {
    return JSON.parse(string);
  } catch {
    return (defaultValue ?? null) as T_DataType | T_Default;
  }
};
