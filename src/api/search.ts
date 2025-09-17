import http from './http'
import axios, { AxiosError } from 'axios'
export interface DictionaryApiResponse {
  field: WordEntry[]
}

export type WordEntry =
  | { word: string }
  | { audio_save: string }
  | { source_url: string }
  | { phonetic: string }
  | { meanings: MeaningWrapper[] }

export interface MeaningWrapper {
  value: {
    field: MeaningField[]
  }
}

export type MeaningField =
  | { synonyms: Synonym[] }
  | { partOfSpeech: string }
  | { definitions: DefinitionWrapper[] }
  | { antonyms: string[] } // If this can exist outside of definition blocks

export interface Synonym {
  value: string
}

export interface DefinitionWrapper {
  value: {
    field: DefinitionField[]
  }
}

export type DefinitionField =
  | { definition: string }
  | { example: string }
  | { synonyms: string[] }
  | { antonyms: string[] }
export type Result<T> = { data: T } | { error: AxiosError }
export async function search(word: string): Promise<Result<DictionaryApiResponse>> {
  try {
    const res = await http.get<DictionaryApiResponse>('/search', {
      params: {
        value: word,
      },
    })
    return { data: res.data }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { error }
    }
    return { error: error as AxiosError }
  }
}
