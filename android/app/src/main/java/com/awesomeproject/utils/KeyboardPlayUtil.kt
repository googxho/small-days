package com.awesomeproject.utils

import android.annotation.SuppressLint
import android.media.MediaPlayer
import androidx.annotation.IdRes
//import com.awesomeproject.Ktx
import com.awesomeproject.R
import java.lang.Exception

/**
 * versions:
 * coding by pmj on 2022/6/21
 * desc:
 */
object KeyboardPlayUtil {


    private const val mediaMaxPool = 5 //最多只能同时用五个媒体播放器

    private val mediaPlayerList: MutableList<MediaPlayer> = mutableListOf()

    @SuppressLint("ResourceType")
    fun keyboardPlay(text:String?){
        text?.let {
            when (text) {
                "0" -> mediaPlay(text, R.raw.num0)
                "1" -> mediaPlay(text, R.raw.num1)
                "2" -> mediaPlay(text, R.raw.num2)
                "3" -> mediaPlay(text, R.raw.num3)
                "4" -> mediaPlay(text, R.raw.num4)
                "5" -> mediaPlay(text, R.raw.num5)
                "6" -> mediaPlay(text, R.raw.num6)
                "7" -> mediaPlay(text, R.raw.num7)
                "8" -> mediaPlay(text, R.raw.num8)
                "9" -> mediaPlay(text, R.raw.num9)
                "点" -> mediaPlay(text, R.raw.point)
                "退位" -> mediaPlay(text, R.raw.delete)
                "清除" -> mediaPlay(text, R.raw.clean)
                "赊欠" -> mediaPlay(text, R.raw.buyorselloncredit)
                "确认收银" -> mediaPlay(text, R.raw.confirm_cashier)
                "确认"-> mediaPlay(text,R.raw.confirm)
                "nocredit"-> mediaPlay(text,R.raw.nocredit)//不能赊欠
                "refund"-> mediaPlay(text,R.raw.refund)//确认还款
                else -> {
                }
            }
        }
    }

    fun mediaPlay(text: String, @IdRes resId: Int) {
        try {
            if (mediaPlayerList.size >= mediaMaxPool) {
                mediaPlayerList.removeAt(0).stop()
            }
//            val player = MediaPlayer.create(Ktx.app, resId)
//            player.setOnCompletionListener { mp ->
//                mp.release()
//                mediaPlayerList.remove(player)
//            }
//            mediaPlayerList.add(player)
//            player.start()
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }
}