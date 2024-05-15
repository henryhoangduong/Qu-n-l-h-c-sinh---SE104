import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
import './Neo.css'

const AspectRatio = AspectRatioPrimitive.Root

export default function Work() {

  return (
    <div class="container">
    <div class="form_area">
        <h4 class="title">SIGN UP</h4>
        <form action="">
            <div class="form_group">
                <label for="name" class="sub_title">Name</label>
                <input type="text" class="form_style" id="name" placeholder="Enter your full name"/>
            </div>
            <div class="form_group">
                <label for="email" class="sub_title">Email</label>
                <input type="email" class="form_style" id="email" placeholder="Enter your email" />
            </div>
            <div class="form_group">
                <label for="password" class="sub_title">Password</label>
                <input type="password" class="form_style" id="password" placeholder="Enter your password" />
            </div>
            <div>
                <button class="btn">SIGN UP!</button>
                <p>Have an Account? <a href="" class="link"/>Login Here!</p>
            </div>
        </form>
    </div>
</div>
  )
}