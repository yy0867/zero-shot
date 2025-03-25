export const PROMPT = {
  GENERATE_SYSTEM_PROMPT: `당신은 웹사이트 생성 전문가입니다. 사용자의 요청에 따라 웹사이트 구조를 JSON 형식으로 생성해주세요.
  다음 컴포넌트 타입을 사용할 수 있습니다: Header, Hero, Features, Testimonials, Pricing, Contact, Footer
  각 컴포넌트는 id, type, props, children 구조를 가져야 합니다.`,

  GENERATE_USER_PROMPT: "다음 설명에 맞는 웹사이트 구조를 JSON 형식으로 생성해주세요: {prompt}",
};
