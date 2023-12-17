import { PostData } from "../types/index";

const TECK_POSTS: PostData[] = [
  {
    id: 0,
    title: "Feign 코드 분석과 서버 성능 개선",
    author: "김성두",
    date: new Date("2023-11-22"),
    thumbnailImg:
      "https://static.toss.im/assets/payments/contents/feign-thumb.jpg",
    summary:
      "Feign과 다중 스레드를 사용하는 과정에서 생긴 문제를 이해하고 성능 개선까지 한 경험을 공유해요.",
    contents: `
      <div>
        <aside>
          <h4>엔지니어링 노트 3: Feign 코드 분석과 서버 성능 개선</h4>
          <p>
            엔지니어링 노트 시리즈는 토스페이먼츠 개발자들이 제품을 개발하면서
            겪은 기술적 문제와 해결 방법을 직접 다룹니다. Feign과 다중 스레드를
            사용하는 과정에서 생긴 문제를 이해하고 성능 개선까지 한 경험을
            공유해요.
          </p>
        </aside>
        <div>
          <p>
            얼마 전 토스페이먼츠 서버 모니터링 시스템을 통해 성능 저하 문제를
            발견했어요. 약 15,000건 정도의 데이터를 10분 내외로 처리해야 하는
            요구사항이 있어 다중 스레드를 활용했는데, 여기서 예상치 못하게
            동시성 문제가 생겼습니다. 문제의 핵심은 HTTP 클라이언트 인터페이스인
            Feign의 내부 구조에 숨어있었어요. 보통 Feign은 기본 설정을 그대로
            사용하기 때문에 여기서 문제가 생길 거라고 예상하지 못했어요. 그래서
            이번 문제를 해결하면서 직접 Feign의 내부를 들여다보았습니다. 그
            내용과 문제 해결 과정을 공유드릴게요.
          </p>
        </div>
      </div>
    `,
  },
  {
    id: 1,
    title: "null 리턴은 왜 나쁠까?",
    author: "나재은",
    date: new Date("2023-11-08"),
    thumbnailImg:
      "https://static.toss.im/ml-illust/programmer-handling-code-box-with-highlighting-lines_20231106_111448975.png",
    summary:
      "코드 복잡성 관리 측면에서 의미를 축약한 표현의 문제와 해결 방법을 예제로 알아봐요.",
    contents: `
      <div>
        <aside>
          <h4>엔지니어링 노트 2: 코드 복잡성 관리하기</h4>
          <p>
            엔지니어링 노트 시리즈는 토스페이먼츠 개발자들이 제품을 개발하면서 겪은 기술적 문제와 해결 방법을 직접 다룹니다. 두 번째로 코드 복잡성을 관리하는 방법을 소개합니다.
          </p>
        </aside>
        <div>
          <p>
            개발자의 고객은 누구라고 생각하시나요? 우리 제품을 사용하는 사용자(End-user)죠. 그런데 또 다른 고객이 있어요. 컴파일 타임의 고객, 바로 동료 개발자입니다. 복잡하고 나쁜 코드는 사용자 고객에게는 버그와 장애를, 개발자 고객에게는 낮은 생산성을 줍니다. 이번 시리즈에서는 사용자 고객뿐 아니라 개발자 고객을 위한 코드 복잡성 관리에 대해 이야기해 볼게요.
          </p>
          <p>
            먼저 내 코드가 얼마나 복잡한지 체크리스트로 확인해 볼게요.
          </p>
        </div>
      </div>
    `,
  },
  {
    id: 2,
    title: "웹에서 복잡한 퍼널 쉽게 관리하기",
    author: "임재후/최수민",
    date: new Date("2023-10-18"),
    thumbnailImg:
      "https://static.toss.im/assets/payments/contents/engineering_thumb.jpg",
    summary:
      "토스페이먼츠 프론트엔드 챕터에서 웹에서 퍼널을 손쉽게 관리하기 위해 했던 고민과 해결 방법을 공유해요.",
    contents: `
      <div>
        <aside>
          <h4>엔지니어링 노트 1: 복잡한 퍼널 쉽게 관리하기</h4>
          <p>
            엔지니어링 노트 시리즈는 토스페이먼츠 개발자들이 제품을 개발하면서 겪은 기술적 문제와 해결 방법을 직접 다룹니다. 첫 번째는 프론트엔드 이야기인데요. 웹에서 퍼널을 손쉽게 관리할 수 있도록 만든 모듈을 소개합니다.
          </p>
        </aside>
        <div>
          <p>
            토스 제품 디자인 원칙(PP: Product Principle)엔 “One thing for One Page”라는 원칙이 있어요. 화면 하나에는 명확한 목표 하나만 있어야 한다는 건데요. 이 원칙에 따라 제품을 만들다 보면 ‘퍼널’이 많이 생깁니다. 토스페이먼츠의 제품도 예외는 아니에요. 그래서 저희 프론트엔드 개발자들은 퍼널의 흐름을 잘 관리해야 하죠. 퍼널이란 사용자가 웹사이트를나 애플리케이션을 방문해서 최종 목표까지 달성하는데 거치는 단계를 뜻합니다.
          </p>
          <p>
            오늘은 토스페이먼츠의 프론트엔드 개발자들이 이 흐름을 어떻게 관리하고 있는지 소개하고, 이 방법의 좋은 점과 아쉬운 지점까지 공유해 볼게요.
          </p>
        </div>
      </div>
    `,
  },
  {
    id: 3,
    title: "유연하고 안전하게 배포 Pipeline 운영하기",
    author: "김동석",
    date: new Date("2023-10-12"),
    thumbnailImg:
      "https://static.toss.im/career-resource/techblog_slash23_thumb_06_%EA%B9%80%EB%8F%99%EC%84%9D.png",
    summary:
      "생산성, 안정성, 보안성을 모두 달성하기 위해선 ‘Pipeline’을 어떻게 설정해야 할까요? 다양하고 복잡한 토스뱅크의 배포 ‘Pipeline’를 안전하게 운영하기 위한 노력을 소개합니다.",
    contents: `
      <div>
        <p>
          토스뱅크에는 400개가 넘는 배포 Pipeline 이 있습니다. Pipeline의 개수가 많아지고, 종류가 다양해지고, 동작이 복잡해지며 여러 어려움이 생기는데요. 토스뱅크에서 Pipeline을 유연하고 안전하게 운영하기 위해 노력한 이야기를 소개해 보려 합니다.
        </p>
      </div>
    `,
  },
];

const DESIGN_POSTS: PostData[] = [
  {
    id: 0,
    title: "독이 되는 레퍼런스 활용법",
    author: "장세린",
    date: new Date("2023-11-27"),
    thumbnailImg:
      "https://static.toss.im/assets/homepage/tosstech/og/design-article-15-og.png",
    summary:
      "매혹적이지만 독이 될 수 있는 레퍼런스. 어떻게 활용하는 것이 좋을까요?",
    contents: `
      <div>
        <div>
          <p>
            토스에서 킥보드도 빌릴 수 있다는 사실, 알고 계시나요? 
          </p>
          <p>
            킥보드 서비스를 디자인하게 된 제가 제일 먼저 한 일은 <b>무작정 다른 앱을 다운받는 거</b>였어요. 킥보드 앱은 차고 넘쳤고, 10개 정도를 보다 보니 다 비슷하게 생겼더라고요. 그래서 별 의심 없이 화면을 토스답게 바꾸기만 하고 있었죠. 
          </p>
          <p>
            ‘나 뭐 하고 있는 거지?’ 하는 생각이 들 때쯤 토스의 코어 밸류인 <b>‘Question Every Assumption’</b>이 뇌리에 스쳤어요. 
          </p>
        </div>
        <aside>
          <h4>Question Every Assumption</h4>
          <p>
            모든 당연해 보이는 것들에 질문을 던져라<br />
            익숙함에서 벗어나 최상의 경험을 제공하자는 취지
          </p>
        </aside>
        <div>
          <p>
            돌이켜보니 저는 당연한 것들에 의문을 가지지 않은 채 관습적으로 디자인하고 있더라고요.<br />
            그때부터 정신 차리고 모든 기능, 모든 요소에 질문을 던지기 시작했어요.
          </p>
        </div>
      </div>
    `,
  },
  {
    id: 1,
    title: "효율적인 유저 리서치 환경을 만드는 리서치 플랫폼 팀, 들어보셨나요?",
    author: "최정은",
    date: new Date("2023-11-23"),
    thumbnailImg:
      "https://static.toss.im/illusts/tech-research-platform-og-image.png",
    summary:
      "토스팀에서 팀원들이 사용자를 더 쉽고, 빠르고, 편하게 만날 수 있도록 고군분투하고 있는 ‘리서치 플랫폼 팀’에 대해 소개해 보려고 해요.",
    contents: `
      <div>
        <div>
          <p>
            지난 심플리시티23에서 많은 분이 UX리서치, 특히 “사용자를 어떻게 만나는지”에 대해 궁금해하셨더라고요. 
          </p>
          <p>
            토스팀에서 팀원들이 사용자를 더 쉽고, 빠르고, 편하게 만날 수 있도록 고군분투하고 있는 ‘리서치 플랫폼 팀’에 대해 소개해 보려고 해요.
          </p>
        </div>
      </div>
    `,
  },
  {
    id: 2,
    title: "완성 없는 이야기, 가입 과정 개선",
    author: "임경우",
    date: new Date("2023-09-12"),
    thumbnailImg:
      "	https://static.toss.im/simplicity23/graphics/sim23-signup-cover.png",
    summary: "가입 완료율을 높이기 위해 고민하고 시도했던 것들을 이야기 해요.",
    contents: `
      <div>
        <div>
          <p>
            제품 성장 과정에 따라 적절한 UX가 다를 수 있다는 사실, 알고 계셨나요? 토스의 가입 과정은 테크 블로그에 첫 번째로 소개되었을 만큼 잘 만들었다고 자부하고 있었는데, 데이터를 확인해 보니 가입 완료율이 생각보다 낮았어요.
          </p>
          <p>
            토스가 성장하면서 가입하는 주요 연령대가 바뀌었기 때문이에요. 가입 유저의 대부분이 2030이었을 때는 가입 완료율이 높았지만, 시니어 유저들이 주 가입층이 되니 가입 완료율이 낮아졌어요. 이번 글에서는 가입 완료율을 높이기 위해 고민하고 시도했던 것들을 이야기할게요.
          </p>
        </div>
      </div>
    `,
  },
  {
    id: 3,
    title: "인터랙션, 꼭 넣어야 해요?",
    author: "박연주/김지혜",
    date: new Date("2023-09-07"),
    thumbnailImg:
      "https://static.toss.im/simplicity23/graphics/sim23-interaction-cover.png",
    summary:
      "빠른 속도를 중요시하는 토스에서 어떻게 팀원들을 인터랙션에 공감하게 하고 슬릭한 제품을 만들어나갈 수 있었는지 소개할게요.",
    contents: `
      <div>
        <p>
          제품을 인터랙티브하게 개선하면 경험이 더 좋아진다는 것은 모두 알지만, 인터랙션을 구현하는 비용 때문에 엄두가 나지 않기도 하는데요. 인터랙션 디자이너가 토스팀에 합류했을 때도 마찬가지였어요. 빠른 속도를 중요시하는 토스에서 어떻게 팀원들을 인터랙션에 대해 공감하게 하고 슬릭한 제품을 만들어나갈 수 있었는지 소개할게요.
        </p>
      </div>
    `,
  },
];

export { TECK_POSTS, DESIGN_POSTS };
