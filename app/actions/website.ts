"use server";

import { revalidatePath } from "next/cache";

export async function createWebsite(formData: FormData) {
  const description = formData.get("description");
  console.log(description);

  // 여기서 LLM API 호출 및 웹사이트 생성 로직 구현
  // 예: OpenAI API 호출, 코드 생성, Vercel 배포 등

  // 예시: 임시 ID 생성 (실제로는 DB에 저장하고 해당 ID 반환)
  const websiteId = Date.now().toString();

  // 필요한 경우 캐시 무효화
  revalidatePath("/builder");

  return websiteId;
}
