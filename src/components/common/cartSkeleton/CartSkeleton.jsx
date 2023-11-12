import { Skeleton } from "@mui/material"


const CartSkeleton = () => {
  
  
  return (
    <div style={{ display: "flex", gap: 20, padding: 32 }}>
    <div>
    <Skeleton variant="rectangular" width={250} height={118} />
    <Skeleton width="20%" />
    <Skeleton width="30%" />
    <Skeleton variant="text" width={40} height={40} />
  </div>
  <div>
    <Skeleton variant="rectangular" width={250} height={118} />
    <Skeleton width="20%" />
    <Skeleton width="30%" />
    <Skeleton variant="text" width={40} height={40} />
  </div>
  <div>
    <Skeleton variant="rectangular" width={250} height={118} />
    <Skeleton width="20%" />
    <Skeleton width="30%" />
    <Skeleton variant="text" width={40} height={40} />
  </div>
  <div>
    <Skeleton variant="rectangular" width={250} height={118} />
    <Skeleton width="20%" />
    <Skeleton width="30%" />
    <Skeleton variant="text" width={40} height={40} />
  </div>

</div>
  )
}

export default CartSkeleton