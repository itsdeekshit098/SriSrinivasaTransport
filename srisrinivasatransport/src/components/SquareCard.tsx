import React from 'react';
import Image from 'next/image';

type SquareCardProps = {
  imageUrl: string;
  label: string;
};

export default function SquareCard({ imageUrl, label }: SquareCardProps) {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <Image src={imageUrl} alt={label} style={styles.image} />
      </div>
      <div style={styles.label}>
        {label}
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    width: '200px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    background: '#fff',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    paddingTop: '66.67%', // ✅ 768 / 1152 = 0.6667 or ~66.67% for 3:2 aspect ratio
 // 💡 1:1 aspect ratio
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  label: {
    padding: '12px',
    fontSize: '16px',
    fontWeight: 500,
    backgroundColor: '#f9f9f9',
  },
};
