import styles from './scss/homePage.module.scss';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function HomePage() {
  return (
    <>
      <Parallax
        pages={4}
        className={styles.wrapper}
        style={{ overflow: 'scroll', height: '90vh', margin: '0 auto' }}
      >
        <ParallaxLayer
          speed={0.5}
          factor={1}
          className={styles.titleImage}
          style={{ backgroundSize: 'cover' }}
        ></ParallaxLayer>
        <ParallaxLayer speed={1} className={styles.title}>
          <h3>Lorem, ipsum dolor.</h3>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          factor={1}
          speed={0.5}
          className={styles.advantages}
        >
          <div></div>
          <section className={styles.advantages__list}>
            <h3 className={styles.advantages__title}>Advantages</h3>
            <div className={styles.advantages__item}>
              <div>
                <svg
                  version="1.0"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="64px"
                  height="64px"
                  viewBox="0 0 64 64"
                  enableBackground="new 0 0 64 64"
                  xmlSpace="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <g>
                      {' '}
                      <path
                        fill="#394240"
                        d="M56,46V12c0-0.553-0.447-1-1-1H9c-0.553,0-1,0.447-1,1v34c0,0.553,0.447,1,1,1h46 C55.553,47,56,46.553,56,46z M54,45H10V13h44V45z"
                      ></path>{' '}
                      <path
                        fill="#394240"
                        d="M63,49h-3V11c0-2.211-1.789-4-4-4H8c-2.211,0-4,1.789-4,4v38H1c-0.553,0-1,0.447-1,1v3c0,2.211,1.789,4,4,4 h56c2.211,0,4-1.789,4-4v-3C64,49.447,63.553,49,63,49z M6,11c0-1.104,0.896-2,2-2h48c1.104,0,2,0.896,2,2v38H36 c-0.553,0-1,0.447-1,1v1h-6v-1c0-0.553-0.447-1-1-1H6V11z M62,53c0,1.104-0.896,2-2,2H4c-1.104,0-2-0.896-2-2v-2h25v1 c0,0.553,0.447,1,1,1h8c0.553,0,1-0.447,1-1v-1h25V53z"
                      ></path>{' '}
                      <g>
                        {' '}
                        <path
                          fill="#F9EBB2"
                          d="M37,51v1c0,0.553-0.447,1-1,1h-8c-0.553,0-1-0.447-1-1v-1H2v2c0,1.104,0.896,2,2,2h56c1.104,0,2-0.896,2-2 v-2H37z"
                        ></path>{' '}
                        <path
                          fill="#F9EBB2"
                          d="M29,50v1h6v-1c0-0.553,0.447-1,1-1h22V11c0-1.104-0.896-2-2-2H8c-1.104,0-2,0.896-2,2v38h22 C28.553,49,29,49.447,29,50z M8,46V12c0-0.553,0.447-1,1-1h46c0.553,0,1,0.447,1,1v34c0,0.553-0.447,1-1,1H9 C8.447,47,8,46.553,8,46z"
                        ></path>{' '}
                      </g>{' '}
                      <rect
                        x="10"
                        y="13"
                        fill="#45AAB8"
                        width="44"
                        height="32"
                      ></rect>{' '}
                    </g>{' '}
                  </g>
                </svg>
              </div>
              <p>
                <span>Lorem, ipsum dolor. </span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi officiis assumenda quae eligendi! Iure voluptatem
                voluptatibus saepe nobis, libero reiciendis sapiente praesentium
                harum. Mollitia eveniet, veniam illum sed odit amet.
              </p>
            </div>
            <div className={styles.advantages__item}>
              <div>
                <svg
                  version="1.0"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="64px"
                  height="64px"
                  viewBox="0 0 64 64"
                  enableBackground="new 0 0 64 64"
                  xmlSpace="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <g>
                      {' '}
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            fill="#506C7F"
                            d="M50,2c-0.553,0-1,0.447-1,1v1v2v4c0,0.553,0.447,1,1,1s1-0.447,1-1V6V4V3C51,2.447,50.553,2,50,2z"
                          ></path>{' '}
                          <path
                            fill="#506C7F"
                            d="M14,2c-0.553,0-1,0.447-1,1v1v2v4c0,0.553,0.447,1,1,1s1-0.447,1-1V6V4V3C15,2.447,14.553,2,14,2z"
                          ></path>{' '}
                        </g>{' '}
                        <path
                          fill="#F9EBB2"
                          d="M62,60c0,1.104-0.896,2-2,2H4c-1.104,0-2-0.896-2-2V17h60V60z"
                        ></path>{' '}
                        <path
                          fill="#F76D57"
                          d="M62,15H2V8c0-1.104,0.896-2,2-2h7v4c0,1.657,1.343,3,3,3s3-1.343,3-3V6h30v4c0,1.657,1.343,3,3,3 s3-1.343,3-3V6h7c1.104,0,2,0.896,2,2V15z"
                        ></path>{' '}
                        <g>
                          {' '}
                          <path
                            fill="#394240"
                            d="M11,54h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5 C10,53.553,10.447,54,11,54z M12,49h4v3h-4V49z"
                          ></path>{' '}
                          <path
                            fill="#394240"
                            d="M23,54h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5 C22,53.553,22.447,54,23,54z M24,49h4v3h-4V49z"
                          ></path>{' '}
                          <path
                            fill="#394240"
                            d="M35,54h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5 C34,53.553,34.447,54,35,54z M36,49h4v3h-4V49z"
                          ></path>{' '}
                          <path
                            fill="#394240"
                            d="M11,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5 C10,42.553,10.447,43,11,43z M12,38h4v3h-4V38z"
                          ></path>{' '}
                          <path
                            fill="#394240"
                            d="M23,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5 C22,42.553,22.447,43,23,43z M24,38h4v3h-4V38z"
                          ></path>{' '}
                          <path
                            fill="#394240"
                            d="M35,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5 C34,42.553,34.447,43,35,43z M36,38h4v3h-4V38z"
                          ></path>{' '}
                          <path
                            fill="#394240"
                            d="M47,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5 C46,42.553,46.447,43,47,43z M48,38h4v3h-4V38z"
                          ></path>{' '}
                          <path
                            fill="#394240"
                            d="M11,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5 C10,31.553,10.447,32,11,32z M12,27h4v3h-4V27z"
                          ></path>{' '}
                          <path
                            fill="#394240"
                            d="M23,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5 C22,31.553,22.447,32,23,32z M24,27h4v3h-4V27z"
                          ></path>{' '}
                          <path
                            fill="#394240"
                            d="M35,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5 C34,31.553,34.447,32,35,32z M36,27h4v3h-4V27z"
                          ></path>{' '}
                          <path
                            fill="#394240"
                            d="M47,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5 C46,31.553,46.447,32,47,32z M48,27h4v3h-4V27z"
                          ></path>{' '}
                          <path
                            fill="#394240"
                            d="M60,4h-7V3c0-1.657-1.343-3-3-3s-3,1.343-3,3v1H17V3c0-1.657-1.343-3-3-3s-3,1.343-3,3v1H4 C1.789,4,0,5.789,0,8v52c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V8C64,5.789,62.211,4,60,4z M49,3c0-0.553,0.447-1,1-1 s1,0.447,1,1v7c0,0.553-0.447,1-1,1s-1-0.447-1-1V3z M13,3c0-0.553,0.447-1,1-1s1,0.447,1,1v7c0,0.553-0.447,1-1,1s-1-0.447-1-1 V3z M62,60c0,1.104-0.896,2-2,2H4c-1.104,0-2-0.896-2-2V17h60V60z M62,15H2V8c0-1.104,0.896-2,2-2h7v4c0,1.657,1.343,3,3,3 s3-1.343,3-3V6h30v4c0,1.657,1.343,3,3,3s3-1.343,3-3V6h7c1.104,0,2,0.896,2,2V15z"
                          ></path>{' '}
                        </g>{' '}
                      </g>{' '}
                      <g>
                        {' '}
                        <rect
                          x="12"
                          y="27"
                          fill="#B4CCB9"
                          width="4"
                          height="3"
                        ></rect>{' '}
                        <rect
                          x="24"
                          y="27"
                          fill="#B4CCB9"
                          width="4"
                          height="3"
                        ></rect>{' '}
                        <rect
                          x="36"
                          y="27"
                          fill="#B4CCB9"
                          width="4"
                          height="3"
                        ></rect>{' '}
                        <rect
                          x="48"
                          y="27"
                          fill="#B4CCB9"
                          width="4"
                          height="3"
                        ></rect>{' '}
                        <rect
                          x="12"
                          y="38"
                          fill="#B4CCB9"
                          width="4"
                          height="3"
                        ></rect>{' '}
                        <rect
                          x="24"
                          y="38"
                          fill="#B4CCB9"
                          width="4"
                          height="3"
                        ></rect>{' '}
                        <rect
                          x="36"
                          y="38"
                          fill="#B4CCB9"
                          width="4"
                          height="3"
                        ></rect>{' '}
                        <rect
                          x="48"
                          y="38"
                          fill="#B4CCB9"
                          width="4"
                          height="3"
                        ></rect>{' '}
                        <rect
                          x="12"
                          y="49"
                          fill="#B4CCB9"
                          width="4"
                          height="3"
                        ></rect>{' '}
                        <rect
                          x="24"
                          y="49"
                          fill="#B4CCB9"
                          width="4"
                          height="3"
                        ></rect>{' '}
                        <rect
                          x="36"
                          y="49"
                          fill="#B4CCB9"
                          width="4"
                          height="3"
                        ></rect>{' '}
                      </g>{' '}
                    </g>{' '}
                  </g>
                </svg>
              </div>
              <p>
                <span>Lorem, ipsum dolor. </span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi officiis assumenda quae eligendi! Iure voluptatem
                voluptatibus saepe nobis, libero reiciendis sapiente praesentium
                harum. Mollitia eveniet, veniam illum sed odit amet.
              </p>
            </div>
            <div className={styles.advantages__item}>
              <div>
                <svg
                  version="1.0"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="64px"
                  height="64px"
                  viewBox="0 0 64 64"
                  enableBackground="new 0 0 64 64"
                  xmlSpace="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <g>
                      {' '}
                      <g>
                        {' '}
                        <path
                          fill="#506C7F"
                          d="M32,2c-0.553,0-1,0.447-1,1v1h2V3C33,2.447,32.553,2,32,2z"
                        ></path>{' '}
                        <path
                          fill="#506C7F"
                          d="M20.135,60.5c-0.277,0.479-0.113,1.09,0.365,1.365c0.479,0.277,1.09,0.113,1.366-0.365l6.64-11.5h-2.309 L20.135,60.5z"
                        ></path>{' '}
                        <path
                          fill="#506C7F"
                          d="M43.865,60.5L37.803,50h-2.309l6.64,11.5c0.276,0.479,0.888,0.643,1.366,0.366S44.143,60.979,43.865,60.5z "
                        ></path>{' '}
                      </g>{' '}
                      <path
                        fill="#F9EBB2"
                        d="M62,46c0,1.104-0.896,2-2,2H4c-1.104,0-2-0.896-2-2V8c0-1.104,0.896-2,2-2h56c1.104,0,2,0.896,2,2V46z"
                      ></path>{' '}
                      <g>
                        {' '}
                        <path
                          fill="#394240"
                          d="M60,4H35V3c0-1.657-1.343-3-3-3s-3,1.343-3,3v1H4C1.789,4,0,5.789,0,8v38c0,2.211,1.789,4,4,4h19.888 l-5.485,9.5c-0.829,1.435-0.338,3.27,1.098,4.098s3.27,0.337,4.098-1.098L30.814,50h2.37l7.217,12.5 c0.829,1.436,2.663,1.927,4.099,1.098c1.436-0.828,1.926-2.662,1.098-4.098L40.112,50H60c2.211,0,4-1.789,4-4V8 C64,5.789,62.211,4,60,4z M31,3c0-0.553,0.447-1,1-1s1,0.447,1,1v1h-2V3z M21.866,61.5c-0.276,0.479-0.888,0.643-1.366,0.365 c-0.479-0.275-0.643-0.887-0.365-1.365L26.197,50h2.309L21.866,61.5z M43.865,60.5c0.277,0.479,0.113,1.09-0.365,1.366 s-1.09,0.112-1.366-0.366L35.494,50h2.309L43.865,60.5z M62,46c0,1.104-0.896,2-2,2H4c-1.104,0-2-0.896-2-2V8c0-1.104,0.896-2,2-2 h56c1.104,0,2,0.896,2,2V46z"
                        ></path>{' '}
                        <path
                          fill="#394240"
                          d="M35,18h-6c-0.553,0-1,0.447-1,1v25h8V19C36,18.447,35.553,18,35,18z M34,42h-4v-8h4V42z M34,32h-4V20h4V32 z"
                        ></path>{' '}
                        <path
                          fill="#394240"
                          d="M47,10h-6c-0.553,0-1,0.447-1,1v33h8V11C48,10.447,47.553,10,47,10z M46,42h-4V32h4V42z M46,30h-4V12h4V30 z"
                        ></path>{' '}
                        <path
                          fill="#394240"
                          d="M23,26h-6c-0.553,0-1,0.447-1,1v17h8V27C24,26.447,23.553,26,23,26z M22,42h-4v-6h4V42z M22,34h-4v-6h4V34 z"
                        ></path>{' '}
                      </g>{' '}
                      <g>
                        {' '}
                        <rect
                          x="18"
                          y="28"
                          fill="#F76D57"
                          width="4"
                          height="6"
                        ></rect>{' '}
                        <rect
                          x="42"
                          y="32"
                          fill="#45AAB8"
                          width="4"
                          height="10"
                        ></rect>{' '}
                        <rect
                          x="30"
                          y="20"
                          fill="#B4CCB9"
                          width="4"
                          height="12"
                        ></rect>{' '}
                        <rect
                          x="42"
                          y="12"
                          fill="#45AAB8"
                          width="4"
                          height="18"
                        ></rect>{' '}
                        <rect
                          x="18"
                          y="36"
                          fill="#F76D57"
                          width="4"
                          height="6"
                        ></rect>{' '}
                        <rect
                          x="30"
                          y="34"
                          fill="#B4CCB9"
                          width="4"
                          height="8"
                        ></rect>{' '}
                      </g>{' '}
                      <g opacity="0.2">
                        {' '}
                        <rect
                          x="42"
                          y="32"
                          fill="#231F20"
                          width="4"
                          height="10"
                        ></rect>{' '}
                        <rect
                          x="18"
                          y="36"
                          fill="#231F20"
                          width="4"
                          height="6"
                        ></rect>{' '}
                        <rect
                          x="30"
                          y="34"
                          fill="#231F20"
                          width="4"
                          height="8"
                        ></rect>{' '}
                      </g>{' '}
                    </g>{' '}
                  </g>
                </svg>
              </div>
              <p>
                <span>Lorem, ipsum dolor. </span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi officiis assumenda quae eligendi! Iure voluptatem
                voluptatibus saepe nobis, libero reiciendis sapiente praesentium
                harum. Mollitia eveniet, veniam illum sed odit amet.
              </p>
            </div>
            <div className={styles.advantages__item}>
              <div>
                <svg
                  version="1.0"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="64px"
                  height="64px"
                  viewBox="0 0 64 64"
                  enableBackground="new 0 0 64 64"
                  xmlSpace="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <g>
                        <path
                          fill="#394240"
                          d="M32,17.998c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,17.998,32,17.998z M32,43.998 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,43.998,32,43.998z"
                        ></path>
                        <path
                          fill="#394240"
                          d="M32,27.998c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S34.209,27.998,32,27.998z M32,33.998 c-1.104,0-2-0.896-2-2s0.896-2,2-2s2,0.896,2,2S33.104,33.998,32,33.998z"
                        ></path>
                        <path
                          fill="#394240"
                          d="M60,23.998h-5.371c-0.283-0.803-0.605-1.587-0.97-2.348l3.798-3.797c1.561-1.562,1.559-4.096-0.002-5.658 l-5.658-5.656c-1.561-1.561-4.094-1.562-5.655,0l-3.798,3.798C41.584,9.974,40.801,9.652,40,9.369V3.996 c-0.001-2.209-1.793-3.999-4.002-4l-8,0.001c-2.208,0-4,1.79-4,3.999V9.37c-0.801,0.283-1.584,0.604-2.344,0.968l-3.797-3.797 C16.295,4.979,13.762,4.98,12.2,6.542l-5.657,5.657c-1.562,1.562-1.562,4.094,0,5.656l3.797,3.797 c-0.363,0.76-0.686,1.544-0.969,2.346H4c-2.209,0-4,1.791-4,4v8c0,2.209,1.791,4,4,4h5.371c0.283,0.803,0.605,1.587,0.97,2.348 l-3.798,3.797c-1.561,1.562-1.559,4.096,0.002,5.658l5.658,5.656c1.561,1.561,4.094,1.562,5.655,0l3.798-3.798 c0.76,0.363,1.543,0.685,2.344,0.968V60c0.001,2.209,1.793,3.999,4.002,4l8-0.001c2.208,0,4-1.79,4-3.999v-5.374 c0.801-0.283,1.584-0.604,2.344-0.968l3.797,3.797c1.562,1.562,4.096,1.561,5.657-0.001l5.657-5.657 c1.562-1.562,1.562-4.094,0-5.656l-3.797-3.797c0.363-0.76,0.686-1.544,0.969-2.346H60c2.209,0,4-1.791,4-4v-8 C64,25.789,62.209,23.998,60,23.998z M62,35.998c0,1.104-0.896,2-2,2c0,0-5.125,0-6,0s-1.035,0.677-1.147,1.01 c-0.112,0.334-0.231,0.664-0.359,0.99c-0.109,0.281-0.224,0.559-0.345,0.834c-0.134,0.306-0.274,0.607-0.422,0.904 c-0.164,0.332-0.53,0.972,0.274,1.776s4.042,4.042,4.042,4.042c0.78,0.781,0.781,2.047,0,2.828l-5.657,5.657 c-0.781,0.781-2.048,0.781-2.829,0.001c0,0-3.183-3.183-4.065-4.065s-1.342-0.456-1.634-0.31c-0.336,0.168-0.678,0.328-1.023,0.48 c-0.274,0.121-0.552,0.234-0.832,0.344c-0.31,0.121-0.622,0.235-0.938,0.342C38.714,52.951,38,52.998,38,53.998 S38.002,60,38.002,60c-0.001,1.104-0.895,2-2,2h-8c-1.105-0.001-2.001-0.896-2.002-2c0,0,0-5.018,0-6.002s-0.593-1.01-0.886-1.105 c-0.376-0.125-0.747-0.258-1.114-0.401c-0.28-0.109-0.558-0.223-0.832-0.344c-0.323-0.142-0.643-0.291-0.957-0.448 c-0.315-0.156-0.889-0.535-1.74,0.316s-4.026,4.027-4.026,4.027c-0.78,0.779-2.046,0.781-2.828,0l-5.657-5.656 c-0.781-0.783-0.781-2.049-0.002-2.83c0,0,3.301-3.301,4.043-4.043s0.488-1.35,0.345-1.633c-0.173-0.344-0.337-0.693-0.492-1.047 c-0.121-0.275-0.235-0.555-0.346-0.836c-0.128-0.326-0.247-0.656-0.359-0.99c-0.112-0.333-0.272-1.01-1.147-1.01s-6,0-6,0 c-1.104,0-2-0.896-2-2v-8c0-1.104,0.896-2,2-2c0,0,5.125,0,6,0s1.035-0.677,1.147-1.01c0.112-0.334,0.231-0.664,0.359-0.99 c0.109-0.281,0.224-0.559,0.345-0.834c0.134-0.306,0.274-0.607,0.422-0.904c0.164-0.332,0.53-0.972-0.274-1.776 s-4.042-4.042-4.042-4.042c-0.78-0.781-0.781-2.047,0-2.828l5.657-5.657c0.781-0.781,2.048-0.781,2.829-0.001 c0,0,3.183,3.183,4.065,4.065s1.342,0.456,1.634,0.31c0.336-0.168,0.678-0.328,1.023-0.48c0.274-0.121,0.552-0.234,0.832-0.344 c0.31-0.121,0.622-0.235,0.938-0.342C25.286,11.045,26,10.998,26,9.998s-0.002-6.002-0.002-6.002c0.001-1.104,0.895-2,2-2h8 c1.105,0.001,2.001,0.896,2.002,2c0,0,0,5.018,0,6.002s0.593,1.01,0.886,1.105c0.376,0.125,0.747,0.258,1.114,0.401 c0.28,0.109,0.558,0.223,0.832,0.344c0.323,0.142,0.643,0.291,0.957,0.448c0.315,0.156,0.889,0.535,1.74-0.316 s4.026-4.027,4.026-4.027c0.78-0.779,2.046-0.781,2.828,0l5.657,5.656c0.781,0.783,0.781,2.049,0.002,2.83 c0,0-3.301,3.301-4.043,4.043s-0.488,1.35-0.345,1.633c0.173,0.344,0.337,0.693,0.492,1.047c0.121,0.275,0.235,0.555,0.346,0.836 c0.128,0.326,0.247,0.656,0.359,0.99c0.112,0.333,0.272,1.01,1.147,1.01s6,0,6,0c1.104,0,2,0.896,2,2V35.998z"
                        ></path>
                      </g>
                      <path
                        fill="#506C7F"
                        d="M62,35.998v-8c0-1.104-0.896-2-2-2c0,0-5.125,0-6,0s-1.035-0.677-1.147-1.01 c-0.112-0.334-0.231-0.664-0.359-0.99c-0.11-0.281-0.225-0.561-0.346-0.836c-0.155-0.354-0.319-0.703-0.492-1.047 c-0.144-0.283-0.397-0.891,0.345-1.633s4.043-4.043,4.043-4.043c0.779-0.781,0.779-2.047-0.002-2.83l-5.657-5.656 c-0.782-0.781-2.048-0.779-2.828,0c0,0-3.175,3.176-4.026,4.027s-1.425,0.473-1.74,0.316c-0.314-0.157-0.634-0.307-0.957-0.448 c-0.274-0.121-0.552-0.234-0.832-0.344c-0.367-0.144-0.738-0.276-1.114-0.401C38.593,11.008,38,10.982,38,9.998s0-6.002,0-6.002 c-0.001-1.104-0.896-1.999-2.002-2h-8c-1.105,0-1.999,0.896-2,2c0,0,0.002,5.002,0.002,6.002s-0.714,1.047-1.064,1.166 c-0.315,0.106-0.628,0.221-0.938,0.342c-0.28,0.109-0.558,0.223-0.832,0.344c-0.346,0.152-0.688,0.312-1.023,0.48 c-0.292,0.146-0.751,0.573-1.634-0.31s-4.065-4.065-4.065-4.065c-0.781-0.78-2.048-0.78-2.829,0.001l-5.657,5.657 c-0.781,0.781-0.78,2.047,0,2.828c0,0,3.237,3.237,4.042,4.042s0.438,1.444,0.274,1.776c-0.147,0.297-0.288,0.599-0.422,0.904 c-0.121,0.275-0.235,0.553-0.345,0.834c-0.128,0.326-0.247,0.656-0.359,0.99c-0.112,0.333-0.272,1.01-1.147,1.01s-6,0-6,0 c-1.104,0-2,0.896-2,2v8c0,1.104,0.896,2,2,2c0,0,5.125,0,6,0s1.035,0.677,1.147,1.01c0.112,0.334,0.231,0.664,0.359,0.99 c0.11,0.281,0.225,0.561,0.346,0.836c0.155,0.354,0.319,0.703,0.492,1.047c0.144,0.283,0.397,0.891-0.345,1.633 s-4.043,4.043-4.043,4.043c-0.779,0.781-0.779,2.047,0.002,2.83l5.657,5.656c0.782,0.781,2.048,0.779,2.828,0 c0,0,3.175-3.176,4.026-4.027s1.425-0.473,1.74-0.316c0.314,0.157,0.634,0.307,0.957,0.448c0.274,0.121,0.552,0.234,0.832,0.344 c0.367,0.144,0.738,0.276,1.114,0.401C25.407,52.988,26,53.014,26,53.998S26,60,26,60c0.001,1.104,0.896,1.999,2.002,2h8 c1.105,0,1.999-0.896,2-2c0,0-0.002-5.002-0.002-6.002s0.714-1.047,1.064-1.166c0.315-0.106,0.628-0.221,0.938-0.342 c0.28-0.109,0.558-0.223,0.832-0.344c0.346-0.152,0.688-0.312,1.023-0.48c0.292-0.146,0.751-0.573,1.634,0.31 s4.065,4.065,4.065,4.065c0.781,0.78,2.048,0.78,2.829-0.001l5.657-5.657c0.781-0.781,0.78-2.047,0-2.828 c0,0-3.237-3.237-4.042-4.042s-0.438-1.444-0.274-1.776c0.147-0.297,0.288-0.599,0.422-0.904c0.121-0.275,0.235-0.553,0.345-0.834 c0.128-0.326,0.247-0.656,0.359-0.99c0.112-0.333,0.272-1.01,1.147-1.01s6,0,6,0C61.104,37.998,62,37.103,62,35.998z M32,45.998 c-7.732,0-14-6.268-14-14s6.268-14,14-14s14,6.268,14,14S39.732,45.998,32,45.998z"
                      ></path>
                      <circle fill="#B4CCB9" cx="32" cy="31.996" r="2"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <p>
                <span>Lorem, ipsum dolor. </span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi officiis assumenda quae eligendi! Iure voluptatem
                voluptatibus saepe nobis, libero reiciendis sapiente praesentium
                harum. Mollitia eveniet, veniam illum sed odit amet.
              </p>
            </div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.5}
          factor={1}
          offset={2}
          className={styles.experience}
        >
          <h3 className={styles.experience__title}>Experience</h3>
          <div className={styles.experience__list}>
            <div className={styles.experienceItem}>
              <div className={styles.experienceItem__img}>
                <img src="./img/project1.jpg" alt="photoProject" />
              </div>
              <h3 className={styles.experienceItem__title}>
                Lorem, ipsum dolor.
              </h3>
              <p className={styles.experienceItem__description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur optio commodi eos? Quis reprehenderit cum natus,
                velit quae eius perspiciatis?
              </p>
            </div>
            <div className={styles.experienceItem}>
              <div className={styles.experienceItem__img}>
                <img src="./img/project2.jpg" alt="photoProject" />
              </div>
              <h3 className={styles.experienceItem__title}>
                Lorem, ipsum dolor.
              </h3>
              <p className={styles.experienceItem__description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur optio commodi eos? Quis reprehenderit cum natus,
                velit quae eius perspiciatis?
              </p>
            </div>
            <div className={styles.experienceItem}>
              <div className={styles.experienceItem__img}>
                <img src="./img/project3.jpg" alt="photoProject" />
              </div>
              <h3 className={styles.experienceItem__title}>
                Lorem, ipsum dolor.
              </h3>
              <p className={styles.experienceItem__description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur optio commodi eos? Quis reprehenderit cum natus,
                velit quae eius perspiciatis?
              </p>
            </div>
            <div className={styles.experienceItem}>
              <div className={styles.experienceItem__img}>
                <img src="./img/project4.jpg" alt="photoProject" />
              </div>
              <h3 className={styles.experienceItem__title}>
                Lorem, ipsum dolor.
              </h3>
              <p className={styles.experienceItem__description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur optio commodi eos? Quis reprehenderit cum natus,
                velit quae eius perspiciatis?
              </p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          factor={1}
          speed={0.5}
          className={styles.contacts}
        >
          <h3 className={styles.contacts__title}>Advantages</h3>
          <div className={styles.contactsForm}>
            <h3 className={styles.contactsForm__title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio recusandae ea quae modi omnis sed, et autem harum natus
              quos.
            </h3>
            <p className={styles.contactsForm__agreement}>
              * Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt labore dolorem sint ducimus tenetur aut!
            </p>
            <input
              className={styles.contactsForm__name}
              placeholder="Name"
            ></input>
            <input
              className={styles.contactsForm__company}
              placeholder="Company"
            ></input>
            <input
              className={styles.contactsForm__phone}
              placeholder="Phone"
            ></input>
            <input
              className={styles.contactsForm__email}
              placeholder="Email"
            ></input>
            <textarea
              className={styles.contactsForm__message}
              placeholder="Message"
            ></textarea>
            <button className={styles.contactsForm__btn}>Send</button>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
