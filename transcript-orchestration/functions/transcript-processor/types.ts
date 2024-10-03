export type WhisperSegment = {
  start: number, // Integer start time
  end: number,   // Integer end time
  text: string   // 'Hello everyone and welcome to our podcast.'
}

export type TranscribeSpeakerSegment = {
  speakerLabel: string, // spk_0
  start: number, // Integer start time
  end: number,   // Integer end time
}

export type MergedTranscriptSegment = {
  speakerLabel: string,
  start: number,
  text: string,
}

export type MergedTranscript = {
  segments: MergedTranscriptSegment[],
  speakers: Record<string, string>
}
