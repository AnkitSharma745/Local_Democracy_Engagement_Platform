import { SUPPORTED_LANGUAGES } from './config';
import English from './languages/english';

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
export type TranslationKey = keyof typeof English;
