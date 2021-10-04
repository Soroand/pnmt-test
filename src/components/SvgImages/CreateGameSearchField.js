import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

function createGameSearchField(props) {
  return (
    <Svg
      width={325}
      height={44}
      viewBox="0 0 325 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        x={0.25}
        y={0.25}
        width={324.5}
        height={43.5}
        rx={1.75}
        stroke="#D4D4D4"
        strokeWidth={0.5}
      />
      <Path
        d="M33.6 19.44c0-1.84-1.36-2.88-3.712-2.88h-4.912V28h5.184c2.368 0 3.888-1.136 3.888-3.344 0-1.712-1.024-2.592-2.224-2.8v-.032c.944-.32 1.776-.976 1.776-2.384zm-6.72 1.856v-3.12h3.056c1.136 0 1.76.56 1.76 1.568s-.512 1.552-1.872 1.552H26.88zm0 1.424h3.344c1.2 0 1.92.656 1.92 1.824 0 1.072-.496 1.84-2.128 1.84H26.88V22.72zm9.317-4.272c.496 0 .96-.32.96-.896 0-.576-.464-.88-.96-.88-.464 0-.944.304-.944.88 0 .576.48.896.944.896zm-.832 1.376V28h1.68v-8.176h-1.68zm7.276-.192c-1.072 0-1.744.704-2.176 1.728h-.032v-1.536h-1.68V28h1.68v-4.176c0-1.744 1.296-2.832 2.912-2.56h.032V19.68a5.168 5.168 0 00-.736-.048zm7.182 3.184h1.68c-.208-1.856-1.6-3.216-3.728-3.216-2.432 0-4.016 1.76-4.016 4.32 0 2.56 1.584 4.32 4.032 4.32 2.128 0 3.584-1.392 3.712-3.28h-1.68c-.064.912-.592 1.904-2.032 1.904-1.664 0-2.352-1.408-2.352-2.944s.704-2.944 2.352-2.944c1.44 0 1.968 1.008 2.032 1.84zM56.98 19.6c-1.375 0-2.223.64-2.655 1.28h-.033v-4.32h-1.68V28h1.68v-4.976c0-1.216.88-2 2.112-2 1.168 0 1.632.704 1.632 1.808V28h1.697v-5.648c0-1.872-1.2-2.752-2.752-2.752zm7.512 8.4h1.904v-4.416h2.8c2.752 0 1.68 3.936 2.208 4.416h2v-.112c-.608-.192.352-4.672-2.288-5.168v-.032c1.312-.32 2.128-1.248 2.128-2.848 0-2.08-1.52-3.28-3.872-3.28h-4.88V28zm1.904-9.824h2.576c1.168 0 2.384.24 2.384 1.888 0 1.664-1.216 1.888-2.384 1.888h-2.576v-3.776zm9.207.272c.496 0 .96-.32.96-.896 0-.576-.464-.88-.96-.88-.464 0-.944.304-.944.88 0 .576.48.896.944.896zm-.832 1.376V28h1.68v-8.176h-1.68zm9.132-3.264v4.256h-.032c-.432-.624-1.232-1.216-2.496-1.216-2.096 0-3.648 1.632-3.648 4.32 0 2.688 1.552 4.32 3.648 4.32 1.264 0 2.064-.624 2.496-1.184h.032V28h1.68V16.56h-1.68zm-2.24 10.304c-1.472 0-2.256-1.344-2.256-2.944 0-1.6.784-2.944 2.256-2.944 1.376 0 2.224 1.12 2.224 2.944 0 1.808-.848 2.944-2.224 2.944zm11.192-7.04v.96h-.032c-.432-.576-1.184-1.184-2.48-1.184-2.048 0-3.584 1.408-3.584 4 0 2.576 1.536 4 3.584 4 1.296 0 2.048-.608 2.48-1.216h.032v.992c0 1.472-.72 2.112-2.128 2.112-1.328 0-1.904-.544-2.064-1.264h-1.696c.176 1.376 1.472 2.608 3.824 2.608 2.32 0 3.744-1.04 3.744-3.392v-7.616h-1.68zm-2.192 6.4c-1.472 0-2.224-1.12-2.224-2.624 0-1.52.752-2.624 2.224-2.624 1.36 0 2.176.896 2.176 2.624 0 1.728-.816 2.624-2.176 2.624zm9.081.64c-1.488 0-2.368-1.136-2.368-2.512h6.272c0-2.912-1.296-4.752-3.936-4.752-2.464 0-4.016 1.664-4.016 4.32 0 2.56 1.552 4.32 4.096 4.32 2.096 0 3.312-1.184 3.728-2.736h-1.68c-.144.496-.704 1.36-2.096 1.36zm-.032-5.936c1.36 0 2.256.912 2.256 2.176h-4.592c0-1.264.976-2.176 2.336-2.176zm16.279-.8h1.904c-.352-2.192-1.952-3.808-4.928-3.808-3.296 0-5.376 2.512-5.376 5.952 0 3.456 1.856 5.968 5.168 5.968 1.728 0 2.8-.656 3.568-1.808h.032l.416 1.568h1.312v-6h-5.168v1.536h3.232c-.016 1.824-1.456 3.072-3.264 3.072-2.608 0-3.392-2.176-3.392-4.336 0-2.144 1.008-4.32 3.456-4.32 1.696 0 2.752.816 3.04 2.176zm7.38 8.112c-2.56 0-4.112-1.776-4.112-4.32 0-2.544 1.552-4.32 4.112-4.32s4.112 1.776 4.112 4.32c0 2.544-1.552 4.32-4.112 4.32zm0-1.376c1.6 0 2.432-1.264 2.432-2.944 0-1.696-.832-2.944-2.432-2.944s-2.432 1.248-2.432 2.944c0 1.68.832 2.944 2.432 2.944zm5.305-10.304V28h1.696V16.56h-1.696zm7.183 1.376V16.56a5.894 5.894 0 00-1.12-.112c-1.344 0-2.08.608-2.08 2.336v1.04h-1.168V21.2h1.168V28h1.696v-6.8h1.504v-1.376h-1.504v-.896c0-.928.416-1.04 1.504-.992zm12.304 2.56h1.904c-.272-2.336-2.032-4.176-4.928-4.176-3.296 0-5.376 2.512-5.376 5.952 0 3.456 2.08 5.968 5.376 5.968 2.912 0 4.672-1.84 4.928-4.416h-1.904c-.128 1.392-.944 2.784-3.072 2.784-2.464 0-3.44-2.064-3.44-4.336 0-2.256.976-4.32 3.44-4.32 2.112 0 2.864 1.392 3.072 2.544zm6.864 7.744c-2.56 0-4.112-1.776-4.112-4.32 0-2.544 1.552-4.32 4.112-4.32s4.112 1.776 4.112 4.32c0 2.544-1.552 4.32-4.112 4.32zm0-1.376c1.6 0 2.432-1.264 2.432-2.944 0-1.696-.832-2.944-2.432-2.944s-2.432 1.248-2.432 2.944c0 1.68.832 2.944 2.432 2.944zm10.649-7.04V24.8c0 1.216-.832 2-2.128 2-1.152 0-1.616-.704-1.616-1.808v-5.168h-1.696v5.648c0 1.872 1.2 2.752 2.72 2.752 1.408 0 2.256-.64 2.688-1.28h.032V28h1.68v-8.176h-1.68zm7.168-.192c-1.072 0-1.744.704-2.176 1.728h-.032v-1.536h-1.68V28h1.68v-4.176c0-1.744 1.296-2.832 2.912-2.56h.032V19.68a5.168 5.168 0 00-.736-.048zm5.351 3.424c-1.184-.272-2.096-.336-2.096-1.168 0-.576.544-.96 1.552-.96 1.312 0 1.632.656 1.744 1.296h1.632c-.112-1.424-1.168-2.624-3.392-2.624-2.048 0-3.232 1.072-3.232 2.416 0 1.856 1.76 2.112 3.056 2.416 1.2.288 2.176.368 2.176 1.392 0 .512-.496 1.088-1.664 1.088-1.728 0-2.112-.752-2.192-1.632h-1.632c.08 1.728 1.216 2.96 3.856 2.96 1.984 0 3.328-.976 3.328-2.544 0-1.952-1.632-2.288-3.136-2.64zm8.002 3.808c-1.488 0-2.368-1.136-2.368-2.512h6.272c0-2.912-1.296-4.752-3.936-4.752-2.464 0-4.016 1.664-4.016 4.32 0 2.56 1.552 4.32 4.096 4.32 2.096 0 3.312-1.184 3.728-2.736h-1.68c-.144.496-.704 1.36-2.096 1.36zm-.032-5.936c1.36 0 2.256.912 2.256 2.176h-4.592c0-1.264.976-2.176 2.336-2.176z"
        fill="#344154"
      />
      <Path
        d="M15.926 27.78l.07.078.074-.074.247-.243h0l.006-.007.012-.015a28.646 28.646 0 001.93-2.568c.46-.696.918-1.468 1.261-2.226.342-.756.574-1.507.574-2.159 0-2.246-1.83-4.054-4.1-4.054-2.27 0-4.1 1.808-4.1 4.054 0 .652.232 1.403.574 2.159.343.757.8 1.528 1.262 2.223.913 1.375 1.848 2.46 1.945 2.56l.245.272zm-3.21-7.214c0-1.799 1.461-3.245 3.284-3.245 1.823 0 3.285 1.446 3.285 3.245 0 .467-.156 1.023-.409 1.614a13.26 13.26 0 01-.968 1.8A27.887 27.887 0 0116 26.612a27.887 27.887 0 01-1.908-2.632 13.26 13.26 0 01-.968-1.8c-.253-.591-.409-1.147-.409-1.614z"
        fill="#344154"
        stroke="#344154"
        strokeWidth={0.2}
      />
      <Path
        d="M14.362 20.566c0 .908.722 1.62 1.638 1.62.916 0 1.639-.712 1.639-1.62 0-.908-.723-1.62-1.639-1.62s-1.638.712-1.638 1.62zm.815 0c0-.46.354-.812.823-.812s.823.351.823.812c0 .46-.354.812-.823.812a.801.801 0 01-.823-.812z"
        fill="#344154"
        stroke="#344154"
        strokeWidth={0.2}
      />
    </Svg>
  );
}

export default createGameSearchField;
