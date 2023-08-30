// ({[item.card.card.itemCards].length})

<div className=" flex justify-center items-center bg-black/10">
    <div className="login-main pt-16 flex max-h-[400px] my-8 justify-center items-center text-sociogram bg-black/20 rounded-xl">
        <div className="login-form-card lg:w-[30vw] xs:w-[400px] bg-secondary p-6 rounded-lg">
            <h1 class="text-center text-3xl pb-4">Login</h1>
            <form className="flex flex-col gap-3">
                <label for="email" class="flex flex-col">Username<input required="" type="text" name="username" id="username" placeholder="@johndoe" class="rounded-lg py-2 px-3 text-black bg-sociogram dark:bg-white" /></label>
                <label for="password" class="flex flex-col">Password<input required="" type="password" name="password" id="password" placeholder="*******" class="rounded-lg py-2 px-3 text-black bg-sociogram dark:bg-white" /></label>
                <label class="checkbox flex gap-2 items-center cursor-pointer"><input type="checkbox" name="remember" id="remember" class="w-4 h-4">Remember Me</label>
                <button type="button" class="bg-transparent border-2 font-semibold p-3 rounded-lg hover:bg-black/30">Guest Mode</button>
                <button type="submit" class="bg-button p-3 rounded-lg text-white mb-10">Submit</button>
            </form>
        </div>
    </div>
</div>

