use crate::GenericError;


#[allow(unused_unsafe)]
pub fn catch_error(why: GenericError) {
    unsafe {
        crate::log(&format!("{:?}", why));
    }
}
