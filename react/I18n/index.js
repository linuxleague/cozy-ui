import I18n, { useI18n as deprecatedUseI18n } from '../providers/I18n'
import { deprecateComponent, deprecateFunction } from '../providers/deprecate'

export const useI18n = deprecateFunction(deprecatedUseI18n)
export default deprecateComponent(I18n)
