import React,{useRef, useEffect } from 'react';

export function Video({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log('Calling video.play()');
      ref.current.play();
    } else {
      console.log('Calling video.pause()');
      ref.current.pause();
    }
    return ()=>{
      console.log('end')//清除函数 在下一次更新运行effect之前调用 第一次渲染不调用
    }
  }, [isPlaying]);

  return <video style={{width:500,height:600}} ref={ref} src={src} />;
}