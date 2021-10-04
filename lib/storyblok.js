import { useEffect, useState } from "react"

export default function useStoryblok(originalStory, location) {
  let [story, setStory] = useState(originalStory)
  return story
}
